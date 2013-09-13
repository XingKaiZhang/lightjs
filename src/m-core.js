(function(host, $, undefined) {

    var doc = $(document);
    var loader = $("<div />");
    var toucher = $("<div />").queue(function(){});

    var crossDomain = host.PUBLIC_BASE === undefined;
    if (crossDomain) {
        host.PUBLIC_BASE = 'http://www.cyou.com/';
        host.PUBLIC_JS = 'http://public.cyou.com/';
    }

    var config = {
        base :    host.PUBLIC_JS || 'http://public.cyou.com/',
        browserCache : '2013-08-15',
        scriptCharset: 'utf-8',
        modules : [
            m('m-dialog'),
            d('info'),
            d('confirm'),
            d('login'),
            l('select'),
            l('select.server'),
            l('auto-list'),
            l('status.ajax'),
            nc(d('msg-box')),
            nc(l('cache.ajax')),
            nc(l('ldj.chat')),
            nc(l('ldj.chat.update')),
            nc(l('ldj.chat.release')),
            m('m-select.ldj-friend'),
            m('m-ldj.role','m-dialog-ldj-role'),
            {
                url: 'js/module/m-dialog.login-sso.js',
                css: 'css/module/m-dialog.login.css',
                event: 'm-dialog-login-sso'
            }
        ]
    };

    exec(config);

    function js(str){
        return 'js/sns/module/' + str + '.js';
    }
    function css(str){
        return 'css/module/' + str + '.css';
    }
    function m(str,event){
        return {
            url        : js(str),
            css        : css(str),
            event    : (event || str).replace(/\./g,'-')
        };
    }
    function d(str){
        return m('m-dialog.' + str);
    }
    function l(str){
        return m('m-' + str,'load-' + str);
    }

    function nc(m){
        delete m.css;
        return m;
    }

    function exec(config){

        $.each(config.modules,function(i,v){

            doc.unbind(v.event + '.m-core').one(v.event + '.m-core',{
                module            : v,
                base            : v.base || config.base || '',
                browserCache    : config.browserCache,
                scriptCharset    : v.scriptCharset || config.scriptCharset

            },function(e,opt){

                e.isImmediatePropagationStopped = function(){return true;};

                var event    = e.data.module.event;
                var replay    = [{
                    target : e.target,
                    opt: Array.prototype.slice.apply(arguments,[1])
                }];

                opt && opt.touch && (replay.length = 0);

                loader.queue(function(replay,event,data){

                    doc.bind(event + '.m-loading',function(e){
                        replay.push({
                            target: e.target,
                            opt: Array.prototype.slice.apply(arguments,[1])
                        });
                    });

                    return function(){

                        data.module.css &&
                            $('<link rel="stylesheet" type="text/css" href="'
                            + data.base
                            + data.module.css
                            + '?'
                            + data.browserCache
                            + '" />').prependTo('head');

                        var themes = doc.triggerHandler('m-themes',[event]);
                        themes &&
                            $('<link rel="stylesheet" type="text/css" href="'
                            + themes
                            + '" />').prependTo('head');

                        $(this).one(event,function(timeout,event){
                            return function(){
                                host.clearTimeout(timeout);
                                doc.unbind(event + '.m-loading');
                                $(this).dequeue();
                                return false;
                            }
                        }(host.setTimeout(function(loader,event){
                            return function(){
                                $(loader).triggerHandler(event);
                            }
                        }($(this),event),3000),event));


                        $.ajax({
                            url: data.base + data.module.url,
                            type: 'GET',
                            cache: true,
                            crossDomain: true,
                            global: false,
                            data:{
                                v : data.browserCache
                            },
                            dataType: 'script',
                            scriptCharset: data.scriptCharset,
                            success: function(replay,event,loader){
                                return function(){
                                    $(loader).triggerHandler(event);
                                    host.setTimeout(function(){
                                        $.each(replay,function(i,v){
                                            $(v.target).trigger(event,v.opt);
                                        });
                                    },10);
                                }
                            }(replay,event,$(this)),
                            error: function(replay,event,loader){
                                return function(){
                                    $(loader).triggerHandler(event);
                                }
                            }(replay,event,$(this))
                        });
                    }
                }(replay,event,e.data));

                return false;

            });

        });

    };

    doc.unbind('m-extend').bind('m-extend',function(e,config){
        exec(config);
    });

    doc.unbind('m-themes').bind('m-themes',function(){

        var config = {
            browserCache: 1,
            themes: {
            }
        };

        return function(e,themes){

            if(typeof themes === 'string' && config.themes && themes in config.themes){
                return config.themes[themes] + '?' + config.browserCache;
            }

            if(typeof themes === 'object'){
                config = themes;
            }
        }
    }());

    $.fn.extend({
        dialog: function(opt){
            $(this).trigger('m-dialog',arguments);
        }
    });

    $.extend({
        dialog: function(dialogType,callback){
            var args,type;

            if(typeof dialogType === 'string'){
                type = dialogType;
                args = [{type: type,callback:callback}];
            }else if(typeof arguments[0] === 'object'){
                type = arguments[0].type;
                args = arguments;
            }

            typeof type === 'string'
                && doc.trigger('m-dialog-' + type ,args);
        }
    });

    doc.unbind('m-touch').bind('m-touch',function(){
        var i = 1;
        var pre = 'm-touch-';
        return function(e,m,type,scriptCharset){

            var event,module;
            type = type || 'module';

            if((type === 'module') && typeof m === 'string'){
                $.each(m.split(/ +/),function(i,v){
                    toucher.queue(function(){
                        v && doc.trigger(v + '.m-core!',{touch: true});
                        $(this).dequeue();
                    });
                });
            }else if(type === 'js' && typeof m === 'string'){

                event = pre + (i++);
                toucher.queue(function(){
                    doc.trigger('m-extend',{
                        scriptCharset: scriptCharset,
                        modules : [
                            {url : m,event : event}
                        ]
                    }).trigger('m-touch', event);

                    $(this).dequeue();
                });

            }else if(typeof m === 'function'){
                toucher.queue(function(){
                    loader.queue(function(m){
                        return function(){
                            m.call();
                            $(this).dequeue();
                        }
                    }(m));
                    $(this).dequeue();
                });
            }
        }

    }());

    $(host).load(function(){
        toucher.dequeue().delay(100);
        !crossDomain &&    //for cyou.com
            doc.trigger('m-touch','load-cache-ajax load-ldj-user-tips load-status-ajax m-dialog');
    });


})(this, jQuery);