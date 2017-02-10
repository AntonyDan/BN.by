var modals = (function() {

  function _showModal(modal) {
    modal.classList.add('js--active');
  }

  function _closeModal(modal) {
    modal.classList.remove('js--active');
  }

  function _fillModal(target, modal) {
    while(target != this) {
      if(target.hasAttribute('data-label')) {
        var titleText = target.getAttribute('data-label'),
        	tarifId = target.getAttribute('data-id'),
            titleNode = modal.querySelector('[data-role="modal-title"]');

        titleNode.innerText = '«' + titleText + '»';
        $("#order_tarif_id").val(tarifId);
        $("#order_tarif_name").val(titleText);

        return;
      }
      target = target.parentNode;
    }
  }

  function _setupListeners(modal, fill) {
    document.body.addEventListener('click', function(e) {
      if(e.target.getAttribute('data-role') === 'order') {
        e.preventDefault();
        if(fill) _fillModal(e.target, modal);
        _showModal(modal);
      } else if(e.target.getAttribute('data-role') === 'close-modal' || e.target.classList.contains('js--active')) {
        e.preventDefault();
        _closeModal(modal);
      }
    });

    document.addEventListener('keydown', function(e) {
      if(modal.classList.contains('js--active') && e.keyCode === 27) {
        _closeModal(modal);
      }
    });
  }


  function init(modal, fill) {
    _setupListeners(modal, fill);
  }

  return {
    init: init
  }
}());

modals.init(document.querySelector('#orderModal'), true);