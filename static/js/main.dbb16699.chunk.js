(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r,a=n(2),i=n.n(a),u=n(7),s=n.n(u),c=(n(13),n(14),n(15),n(0)),o=function(t){var e=t.calendar;return Object(c.jsx)(i.a.Fragment,{children:e.visibleSlots.map((function(t,e){return Object(c.jsx)("ul",{className:"day",children:Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{children:Math.floor(t.startTime/60)}),":",Object(c.jsx)("span",{children:(t.startTime%60).toString().padStart(2,"0")})]})},e)}))})},l={startTime:480,endTime:840,breakStart:660,breakEnd:690},m={startTime:780,endTime:1140,breakStart:960,breakEnd:990},f={startTime:480,endTime:840,breakStart:660,breakEnd:690},d={daysToDisplay:7,startHour:7,endHour:20,timeSlotDuration:30};!function(t){t[t.NOT_WORKING=0]="NOT_WORKING",t[t.AVAILABLE=1]="AVAILABLE",t[t.LUNCH_BREAK=2]="LUNCH_BREAK",t[t.UNAVAILABLE=3]="UNAVAILABLE",t[t.RESERVED=4]="RESERVED"}(r||(r={}));n(17);function b(t){switch(t){case r.AVAILABLE:return"Available";case r.LUNCH_BREAK:return"Lunch break";case r.NOT_WORKING:return"Not working";case r.RESERVED:return"Reserved";case r.UNAVAILABLE:return"Unavailable"}}function j(t){var e=t.slot;return Object(c.jsx)("span",{className:"time-slot",children:b(e.status)})}n(18);function A(t){var e=t.day,n=t.onTimeSlotClick,a=function(t){return function(t){switch(t){case r.NOT_WORKING:return"not-working";case r.AVAILABLE:return"available";case r.UNAVAILABLE:return"unavailable";case r.LUNCH_BREAK:return"lunch-break";case r.RESERVED:return"reserved";default:return"unavailable"}}(t.status)},i=function(t){return"".concat("time-slot"," ").concat(a(t))};return Object(c.jsxs)("ul",{children:[" ",e.timeSlots.map((function(t,e){return Object(c.jsx)("li",{className:i(t),onClick:function(){return function(t){t.status!==r.AVAILABLE&&t.status!==r.RESERVED||n(t)}(t)},children:Object(c.jsx)(j,{slot:t})},e)}))]})}n(19);var E=function(t){var e=t.days,n=t.onTimeSlotClick;return Object(c.jsx)(i.a.Fragment,{children:e.map((function(t,e){return Object(c.jsxs)("div",{className:"day",children:[Object(c.jsx)("span",{children:t.date.toLocaleDateString("hr")}),Object(c.jsx)(A,{day:t,onTimeSlotClick:n})]},e)}))})},O=n(8),S=n(1),h=n(5);function T(t){return{startDate:new Date(t),calendarSettings:Object(S.a)({},d),days:[],visibleSlots:function(){var t=60*d.startHour,e=d.timeSlotDuration,n=V(d);return Object(h.a)(Array(n)).map((function(n,r){return{display:!0,duration:e,startTime:t+r*e}}))}()}}function v(t,e){return Object(h.a)(Array(e)).map((function(e,n){var r=new Date(t);return r.setDate(t.getDate()+n),function(t){var e=function(t){if(function(t){return 0===t.getDay()}(t)||R(t)&&D(t))return null;if(N(t)&&D(t))return f;if(N(t))return l;if(R(t))return m;return null}(t);return{date:new Date(t),shiftSettings:e,timeSlots:p(t,e)}}(r)}))}var L=function(t){return 60*t.hour+t.minute};function p(t,e){var n=V(d);return Object(h.a)(Array(n)).map((function(n,r){return{date:new Date(t),duration:d.timeSlotDuration,startTime:L({hour:d.startHour,minute:r*d.timeSlotDuration}),status:g(L({hour:d.startHour,minute:r*d.timeSlotDuration}),e)}}))}function g(t,e){return e?t<e.startTime||t>=e.endTime?r.NOT_WORKING:t===e.breakStart?r.LUNCH_BREAK:r.AVAILABLE:r.NOT_WORKING}var D=function(t){return 6===t.getDay()},R=function(t){return t.getDate()%2!==0},N=function(t){return t.getDate()%2===0};function V(t){var e=60*t.startHour;return(60*t.endHour-e)/t.timeSlotDuration}var I=function(t){for(var e=[],n=function(){var n=t.filter((function(t){return t.timeSlots.find((function(t){return t.status===r.AVAILABLE}))})),a=n[Math.floor(Math.random()*n.length)].timeSlots.filter((function(t){return t.status===r.AVAILABLE})),i=a[Math.floor(Math.random()*a.length)];e.find((function(t){return t.date.getTime()===i.date.getTime()&&t.startTime===i.startTime}))||e.push(i)};e.length<16;)n();return e},k=function(t,e){return t.map((function(t){return Object(S.a)(Object(S.a)({},t),{},{timeSlots:t.timeSlots.map((function(t){return e.find((function(e){return e.date.getTime()===t.date.getTime()&&e.startTime===t.startTime}))?Object(S.a)(Object(S.a)({},t),{},{status:r.UNAVAILABLE}):t}))})}))};function x(t,e){switch(e.type){case"reserve_slot":return t.map((function(t){return t.date.getTime()===e.slot.date.getTime()?Object(S.a)(Object(S.a)({},t),{},{timeSlots:t.timeSlots.map((function(t){return t.startTime===e.slot.startTime?Object(S.a)(Object(S.a)({},t),{},{status:r.RESERVED}):t}))}):t}));case"remove_reservation_from_slot":return t.map((function(t){return t.date.getTime()===e.slot.date.getTime()?Object(S.a)(Object(S.a)({},t),{},{timeSlots:t.timeSlots.map((function(t){return t.startTime===e.slot.startTime?Object(S.a)(Object(S.a)({},t),{},{status:r.AVAILABLE}):t}))}):t}))}}function y(){var t=Object(a.useReducer)(x,function(t,e){var n=v(t,e),r=I(n);return k(n,r)}(new Date,d.daysToDisplay)),e=Object(O.a)(t,2),n=e[0],i=e[1];return{updateSlot:function(t){switch(t.status){case r.AVAILABLE:n.reduce((function(t,e){return t+e.timeSlots.filter((function(t){return t.status===r.RESERVED})).length}),0)>1?alert("Week max limit reached"):!function(t,e){var n=t.find((function(t){return t.date.getTime()===e.date.getTime()}));return!!n&&n.timeSlots.filter((function(t){return t.status===r.RESERVED})).length>0}(n,t)?i({type:"reserve_slot",slot:t}):alert("Day max limit reached");break;case r.RESERVED:i({type:"remove_reservation_from_slot",slot:t});break;default:alert("Error")}},state:n,dispatch:i}}var B=function(){var t=T(new Date),e=y(),n=e.state,r=e.updateSlot;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("span",{className:"times",children:Object(c.jsx)(o,{calendar:t})}),Object(c.jsx)("div",{className:"week",children:Object(c.jsx)(E,{days:n,onTimeSlotClick:r})})]})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,u=e.getTTFB;n(t),r(t),a(t),i(t),u(t)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),_()}],[[20,1,2]]]);
//# sourceMappingURL=main.dbb16699.chunk.js.map