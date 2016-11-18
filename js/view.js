var fileTransfertsView = $("#fileTransfertsView");
var scope;

function paginate() {
    scope = angular.element(fileTransfertsView).scope()
    var array = scope.page == 'upload' ? scope.uploadTransferts : scope.transferts;
    scope.pageCount = (array.length / scope.displayedTransfertsCount) + 1;
    // init bootpag
    $('#page-selection').bootpag({
        total: scope.pageCount,
        maxVisible: 5,
        firstLastUse: true,
        first: '←',
        last: '→',
    }).on("page", function(event, num) {
        scope.changePage(num);
        scope.$apply();
    });
    if (scope.page == 'browse')
        scope.defineBodyPadding();
}

function onImgChevronClick() {
    var imgChevronCollapse = $("#imgChevronCollapse");
    if (imgChevronCollapse.hasClass("fa-chevron-down")) {
        imgChevronCollapse.removeClass("fa-chevron-down");
        imgChevronCollapse.addClass("fa-chevron-up");
    }
    else if (imgChevronCollapse.hasClass("fa-chevron-up")) {
        imgChevronCollapse.removeClass("fa-chevron-up");
        imgChevronCollapse.addClass("fa-chevron-down");
    }
}

fileTransfertsView.on("hidden.bs.collapse", function() {
    if (scope.page == 'browse')
        scope.defineBodyPadding();
});

fileTransfertsView.on("shown.bs.collapse", function() {
    if (scope.page == 'browse')
        scope.defineBodyPadding();
});