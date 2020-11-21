import ultimatePagination from 'ultimate-pagination';

const paginationOptions = {
    // Required
    currentPage: 1,
    totalPages: 20,
  
    // Optional
    boundaryPagesRange: 1,
    siblingPagesRange: 2,
    hideEllipsis: false,
    hidePreviousAndNextPageLinks: false,
    hideFirstAndLastPageLinks: true,
  }

  
  function paginationTpl(options) {
    return ultimatePagination.getPaginationModel(options).map(pagination => {
    let tpl;
    let disable = '';
    let active = '';
    if (pagination.isActive) {
        disable = 'is-disabled';
    }
    if (pagination.type!=="PAGE") {
    tpl = `<a href="#" class="pagination-${pagination.type}-btn ${disable}" 
    data-value = "${pagination.value}">
    <svg class="pagination-${pagination.type}-icon ${disable}" width="" height="">
        <use href="../images/${pagination.type}.svg"></use>
    </svg>
    </a>`;
    return tpl;
} else {
    if (pagination.isActive){
        active = 'current-page-btn';
    }
    tpl = `<a href="#" class="pagination-${pagination.type}-btn ${disable}
    ${active}" data-value="${pagination.value}">
${pagination.value}
    </a>`;
    return tpl;
}
}).join('');
  }

// function onPageSwitch (evt) {
//     evt.preventDefault();
//     paginationOptions.currentPage = evt.target.dataset.value;
// }

console.log(paginationTpl(paginationOptions));