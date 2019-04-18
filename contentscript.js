var id =$("a.header-avatar>span :nth-child(2)").attr("id");
var idx=id.indexOf("-");
var myId=id.substring(0,idx);
$("div.js-list.list-wrapper:not(:has(a.list-card:visible))").toggle()
$("a.list-card:not(:has(.js-member-on-card-menu[data-idmem='"+myId+"']))").toggle()
$("div.js-list.list-wrapper:not(:has(a.list-card:visible))").toggle()

