try{window.performance.setResourceTimingBufferSize(400)}catch(e){}try{var _bttErrorListener=_bttErrorListener||function(b,c){var d=[],e=[];b.addEventListener&&b.addEventListener("error",function(a){"undefined"==typeof _bttErr?d.push(a):_bttErr.capture(a.message,a.filename,a.lineno,a.colno,a.error)}); c.addEventListener&&c.addEventListener("securitypolicyviolation",function(a){"undefined"==typeof _bttErr?e.push([a.blockedURI,a.lineNumber,+new Date,a.sourceFile,a.disposition]):_bttErr.captSec(a.blockedURI,a.lineNumber,+new Date,a.sourceFile,a.disposition)});return{get:function(a){return"a"==a?d:e}}}(window,document)}catch(b){_bttErrorListener=void 0};