  $(document).ready(function() {
    var currentDate = dayjs().format('dddd, MMMM D');
    $('#currentDay').text(currentDate);
    // console.log(currentDate);
  });

  function handleButtonPress(event){
    var valueToSave = $(this).prev().val();
    // console.log(valueToSave);
    var key =$(this).parent().attr('id');
    localStorage.setItem(key, valueToSave);
  };

  $(`.saveBtn`).click(handleButtonPress);

  function loadStorage(){
    var myKey = $(this).attr("id");
    // console.log(myKey);
    var theValueSaved = localStorage.getItem(myKey);
    $(this).children().eq(1).val(theValueSaved);
  };

  $(".time-block").each(loadStorage);
  
  $(document).ready(function() {
    function updateScheduler() {
      var currentHour = dayjs().format('H');
      // console.log(currentHour);
      $(`.time-block`).each(function() {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
        // console.log(blockHour);
        if (blockHour < currentHour) {
          $(this).addClass('past').removeClass('present future');
        } else if (blockHour == currentHour) {
          $(this).addClass('present').removeClass('past future');
        } else {
          $(this).addClass('future').removeClass('past present');
        };
      });
    };
    updateScheduler();
  });

