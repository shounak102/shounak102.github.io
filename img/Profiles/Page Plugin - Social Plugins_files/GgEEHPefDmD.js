if (self.CavalryLogger) { CavalryLogger.start_js(["Yj+LH"]); }

__d('TabBarShim',['DOMContainer.react','React','isNode'],(function a(b,c,d,e,f,g){var h=function i(j){var k;if(j.children){k=j.children.map(function(m,n){if(typeof m==='object'&&typeof m.ctor==='function'){return i(m);}else if(c('isNode')(m)){var o=c('React').createElement(c('DOMContainer.react'),{key:'TabBarShim-'+n},m);return o;}else return m;});if(k.length===1)k=k[0];}var l=j.ctor;return c('React').createElement(l,j.props,k);};f.exports=h;}),null);