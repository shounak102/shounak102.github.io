if (self.CavalryLogger) { CavalryLogger.start_js(["\/8oqQ"]); }

__d('CodeTabs',['CSS'],(function a(b,c,d,e,f,g){function h(i,j){i.forEach(function(k){var l=k[0],m=k[1];if(m!=j)c('CSS').hide(m);l.subscribe('select',function(){if(j)c('CSS').hide(j);c('CSS').show(m);j=m;});});}f.exports=h;}),null);
__d('DevsiteReferenceCodeSelector',['csx','CSS','DOMQuery'],(function a(b,c,d,e,f,g,h){function i(j,k){'use strict';this.$DevsiteReferenceCodeSelector1=k;j.subscribe('change',this.$DevsiteReferenceCodeSelector2.bind(this));}i.prototype.$DevsiteReferenceCodeSelector2=function(j,k){'use strict';var l=c('DOMQuery').scry(this.$DevsiteReferenceCodeSelector1,"._5txd"),m=k.selected.getValue();l.forEach(function(n){c('CSS').conditionShow(n,c('CSS').hasClass(n,'code_'+m));});};f.exports=i;}),null);
__d('DevsiteReferenceTable',['csx','CSS','DOMQuery','Event','Parent'],(function a(b,c,d,e,f,g,h){function i(j){'use strict';c('Event').listen(j,'click',function(event){var k=c('Parent').byTag(event.getTarget(),'tr');if(!c('CSS').matchesSelector(k,"._5m27"))return;this.$DevsiteReferenceTable1(j,k,j.rows);}.bind(this));}i.prototype.$DevsiteReferenceTable1=function(j,k,l){'use strict';var m=this.$DevsiteReferenceTable2(k),n=c('CSS').hasClass(k,'open'),o=[].indexOf.call(l,k)+1;for(var p=o;p<l.length;p++){var q=l[p],r=this.$DevsiteReferenceTable2(q);if(!this.$DevsiteReferenceTable3(m,r))break;if(n){c('CSS').hide(q);}else if(this.$DevsiteReferenceTable4(m,r)){c('CSS').show(q);}else if(c('CSS').hasClass(this.$DevsiteReferenceTable5(j,r),'open'))c('CSS').show(q);}c('CSS').toggleClass(k,'open');};i.prototype.$DevsiteReferenceTable2=function(j){'use strict';return /row_((\d+-?)+)/.exec(j.className)[1];};i.prototype.$DevsiteReferenceTable5=function(j,k){'use strict';var l=k.split('-');l.pop();return c('DOMQuery').find(j,'tr.row_'+l.join('-'));};i.prototype.$DevsiteReferenceTable3=function(j,k){'use strict';return k.substring(0,j.length+1)===j+'-';};i.prototype.$DevsiteReferenceTable4=function(j,k){'use strict';var l=k.substr(j.length+1);return l.indexOf('-')<0;};f.exports=i;}),null);
__d('DevsiteURLChanger',['URI'],(function a(b,c,d,e,f,g){var h={changeURL:function i(j){var k=new (c('URI'))(location.href),l=new (c('URI'))(j).setDomain(k.getDomain()).setProtocol(k.getProtocol());if(k.toString()===l.toString())return;window.history.replaceState(window.history.state,'',l.setFragment(k.getFragment()).toString());}};f.exports=h;}),null);
__d('DevsiteDocsCMSCodeTabs',['CSS','DOMEventListener'],(function a(b,c,d,e,f,g){'use strict';var h={init:function i(j,k){Object.keys(j).forEach(function(l){c('DOMEventListener').add(j[l],'click',function(){this._onButtonClick(l,k);}.bind(this));}.bind(this));},_onButtonClick:function i(j,k){Object.keys(k).forEach(function(l){c('CSS').conditionShow(k[l],l===j);});}};f.exports=h;}),null);
__d('ErrorSignal',['AsyncRequest','AsyncSignal','BanzaiODS','ErrorSignalConfig','SessionName','ScriptPath','SiteData','emptyFunction'],(function a(b,c,d,e,f,g){var h=true;function i(m,n){if(m&&m==='beacon_error'){c('BanzaiODS').bumpEntityKey('js_error_reporting','beacon_error_signal.sent');new (c('AsyncSignal'))(c('ErrorSignalConfig').uri,{c:m,m:n}).send();return;}else if(m&&m==='async_error'){var o=JSON.parse(n),p=o.err_code,q=o.path;if(p in {'1004':1,'12029':1,'12031':1,'12152':1}&&q.indexOf('scribe_endpoint.php')==-1){new (c('AsyncRequest'))().setURI(c('ErrorSignalConfig').uri).setData({c:'async_error',m:n}).setMethod('GET').setReadOnly(true).setOption('suppressEvaluation',true).setOption('suppressErrorAlerts',true).setHandler(c('emptyFunction')).setErrorHandler(c('emptyFunction')).send(true);return;}}if(m==='javascript_error')c('BanzaiODS').bumpEntityKey('js_error_reporting','error_signal.sent');new (c('AsyncSignal'))(c('ErrorSignalConfig').uri,{c:m,m:n}).send();}function j(m,n){n=n||{};n.svn_rev=c('SiteData').revision;n.push_phase=c('SiteData').push_phase;n.script_path=c('ScriptPath').getScriptPath();n.extra=n.extra||{};n.extra.hrm=c('SiteData').be_mode;var o=n.extra.type||'error';if(h&&m==='onerror'&&o==='error'){n.extra.extra.push('first_error');h=false;}var p=(c('SessionName').getName()||'-')+'/-';i('javascript_error',JSON.stringify({c:m,a:p,m:n}));}function k(){var m='beacon_error',n=(c('SessionName').getName()||'-')+'/-',o={};o.error=m;o.svn_rev=c('SiteData').revision;o.push_phase=c('SiteData').push_phase;o.script_path=c('ScriptPath').getScriptPath();o.extra={message:m,type:'info'};i(m,JSON.stringify({c:m,a:n,m:o}));}var l={sendBeaconErrorSignal:k,sendErrorSignal:i,logJSError:j};f.exports=l;b.ErrorSignal=l;}),null);
__d('ErrorLogging',['ErrorSignal','ErrorUtils','JSErrorExtra','JSErrorPlatformColumns'],(function a(b,c,d,e,f,g){function h(k){var l=k.extra||{},m={};Object.keys(c('JSErrorExtra')).forEach(function(n){if(c('JSErrorExtra')[n])m[n]=true;});Object.keys(l).forEach(function(n){if(l[n]){m[n]=true;}else if(m[n])delete m[n];});k.extra=Object.keys(m);}function i(k){if(c('JSErrorPlatformColumns').app_id!==undefined)k.app_id=c('JSErrorPlatformColumns').app_id;if(c('JSErrorPlatformColumns').access_token!==undefined)k.access_token=c('JSErrorPlatformColumns').access_token;}function j(k){h(k);i(k);c('ErrorSignal').logJSError(k.category||'onerror',{error:k.name||k.message,extra:k});}c('ErrorUtils').addListener(j);f.exports={defaultJSErrorHandler:j};}),null);
__d('Selector',['csx','ArbiterMixin','BehaviorsMixin','Button','DOM','DOMQuery','mixin'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('mixin')(c('ArbiterMixin'),c('BehaviorsMixin')));j=i&&i.prototype;function k(l,m,n,o,p){'use strict';j.constructor.call(this);this._popoverMenu=l;this._button=m;this._menu=n;this._input=o;this.init();p.behaviors&&this.enableBehaviors(p.behaviors);}k.prototype.init=function(){'use strict';this._menu.subscribe('change',function(l,m){this._setLabelContent(m.label);this._input.value=m.value;this.inform('change',m);}.bind(this));this._popoverMenu.getPopover().subscribe(['hide','show'],function(l){this.inform(l);}.bind(this));};k.prototype._getLabel=function(){'use strict';return c('DOMQuery').find(this._button,"span._55pe");};k.prototype._setLabelContent=function(l){'use strict';var m=this._getLabel();c('DOM').setContent(m,l);};k.prototype.getLabelContent=function(){'use strict';var l=this._getLabel();return l.firstChild;};k.prototype.setValue=function(l){'use strict';this._menu.setValue(l);};k.prototype.getValue=function(){'use strict';return this._input.value;};k.prototype.getName=function(){'use strict';return this._input.name;};k.prototype.getButton=function(){'use strict';return this._button;};k.prototype.getMenu=function(){'use strict';return this._menu;};k.prototype.enable=function(){'use strict';c('Button').setEnabled(this._button,true);this._popoverMenu.enable();};k.prototype.disable=function(){'use strict';c('Button').setEnabled(this._button,false);this._popoverMenu.disable();};f.exports=k;}),null);
__d('SelectorSubmitOnChange',['Parent','submitForm'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._selector=i;}h.prototype.enable=function(){'use strict';this._subscription=this._selector.subscribe('change',this._onChange.bind(this));};h.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};h.prototype._onChange=function(){'use strict';var i=c('Parent').byTag(this._selector.getButton(),'form');i&&c('submitForm')(i);};Object.assign(h.prototype,{_subscription:null});f.exports=h;}),null);
__d('ButtonGroupX',['ArbiterMixin','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this);l=l||{};this._root=k;this._radioButtons=l.radioButtons||[];this._selected=l.selected;this.initButtonListeners();}j.prototype.initButtonListeners=function(){'use strict';var k=this._radioButtons.length;while(k--){var l=this._radioButtons[k];l.subscribe('select',this.selectButton.bind(this,l));}};j.prototype.getSelected=function(){'use strict';return this._selected;};j.prototype.getSelectedValue=function(){'use strict';return this._selected?this._selected.getValue():null;};j.prototype.selectButton=function(k){'use strict';if(this._selected!==k){this.setSelected(k);this.inform('change',{selected:k});}return this;};j.prototype.setSelected=function(k){'use strict';if(this._selected!==k){if(this._selected)this._selected.setSelected(false);k.setSelected(true);this._selected=k;}return this;};j.prototype.setSelectedValue=function(k){'use strict';var l=this._radioButtons.length;while(l--){var m=this._radioButtons[l];if(m.getValue()===k)return this.setSelected(m);}return this;};f.exports=j;}),null);
__d('ToggleButton',['cx','ArbiterMixin','CSS','Event','mixin'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;function k(l,m){'use strict';j.constructor.call(this);this._root=l;this._selected=m;c('Event').listen(l,'click',this._handleClick.bind(this));}k.prototype.getRoot=function(){'use strict';return this._root;};k.prototype._handleClick=function(){'use strict';var l=!this.isSelected();this.setSelected(l);this.inform(l?'select':'deselect');this.inform('change',{selected:l});return this;};k.prototype.isSelected=function(){'use strict';return this._selected;};k.prototype.setSelected=function(l){'use strict';l=l!==false;if(this._selected!==l){this._selected=l;this._root.setAttribute('aria-pressed',l?'true':'false');c('CSS').conditionClass(this._root,"_42fs",l);}return this;};f.exports=k;}),null);
__d('RadioButton',['ToggleButton'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('ToggleButton'));i=h&&h.prototype;j.prototype.getValue=function(){'use strict';return this._root.getAttribute('data-value');};j.prototype._handleClick=function(){'use strict';return !this.isSelected()?i._handleClick.call(this):this;};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);