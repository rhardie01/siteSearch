function search(){
    var site = document.getElementById("searchsite").value;
    var lookfor = document.getElementById("txtlookfor").value;

    if(lookfor.length > 0){
        var engine = document.getElementById("dropdown").value;
        var query="http://www." + engine +".com/search?q=" + encodeURIComponent(lookfor) + " site:" + site;
        location.href = query;
    } else {
        alert("please enter a query");
    }
}