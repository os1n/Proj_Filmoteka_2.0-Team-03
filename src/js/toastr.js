import toastr from '../../node_modules/toastr/toastr';
import '../../node_modules/toastr/build/toastr.css';

function toastrNoFind() {
  toastr['error']("We can't find any movie", 'Sorry :(');

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '5000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
  };
}
function toastrNoInput() {
  toastr['error']('Nothig to search', 'Write something');

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '5000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
  };
}
function toastrFinded(totalResults, totalPages) {
  toastr['success'](`on ${totalPages} pages`, `Successfully found ${totalResults} results`);

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: 'toast-bottom-right',
    preventDuplicates: false,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '5000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
  };
}
export default { toastrNoFind, toastrNoInput, toastrFinded };
