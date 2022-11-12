const submit=document.getElementById("submit");

//Linking pexels api for searching pics

$(document).ready(function(){
  var api_key="563492ad6f91700001000001e25df6a380c94f4ebdc34f690b9975c9";
  var image=''
    $("#form").submit(function (event){
        event.preventDefault();
        var search=$("#tag").val();
        image_search(search)
    })
    function image_search(search){
        $.ajax({
          method:'GET',
          beforeSend: function(xhr) {
            xhr.setRequestHeader ("Authorization",api_key);
          },
          url:"https://api.pexels.com/v1/search?query="+ search +"&per_page=6&page=1",
          success:function(data){
            //console.log(data)
            data.photos.forEach(photo => {
                image=`
                <img src="${photo.src.original}" width=400px height=200px/>
                `
                $("#imagegrid").append(image)
            });
          },
          error:function(error){
            console.log(error)
          }
        })
      }
  })

const search=document.getElementById("search");
search.addEventListener('click',e=>{
  e.preventDefault();
  window.location.assign("search.html")
})
