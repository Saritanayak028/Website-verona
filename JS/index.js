// const optionMenu=document.querySelector(".select-menu"),
//       selectBtn=optionMenu.querySelector(".select-btn"),
//       options=optionMenu.querySelectorAll(".option"),
//       sBtn_text=optionMenu.querySelector(".sBtn-text");

// selectBtn.addEventListener("click",()=>optionMenu.classList.toggle("active"));

// options.forEach(option =>{
//     option.addEventListener("click",()=>{
//         let selectedOption=option.querySelector(".option-text").inner-Text;
//         sBtn_text.innerText = selectedOption;

//         optionMenu.classList.toggle("active");
//     })
// })
// function on() {
//     document.getElementById("Show").style.display = "block";
//   }
  
//   function off() {
//     document.getElementById("Show").style.display = "none";
//   }


  // $( ".tab_btn" ).click(function() {
  //   $( ".tab_btn" ).css('color', ' #7360ff');
  // });
  // // const tabs= document.querySelectorAll('.tab_btn');
  // const all_content= document.querySelectorAll('.content_1')
         const tabs= document.querySelectorAll('.tab_btn');
        const all_content= document.querySelectorAll('.cont');

        tabs.forEach((tab, _index)=>{
            tab.addEventListener('click',(e)=>{
                tabs.forEach(tab=>{tab.classList.remove('active')});
                tab.classList.add('active');

                var line= document.querySelector('.line');
                line.style.width=e.target.offsetWidth + "px";
                line.style.left=e.target.offsetLeft + "px";

                all_content.forEach(cont=>{cont.classList.remove('active')});
                all_content[_index].classList.add('active');
                
            })
        }
        )

        // $(function(){
        //     $('#datepicker').datepicker();
        //   });
        var a = document.getElementsByClassName("fieldset");
        var i;
        
        for (i = 0; i < a.length; i++) {
          a[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var legend = this.nextElementSibling;
            if (legend.style.maxHeight){
              legend.style.maxHeight = null;
            } else {
              legend.style.maxHeight = legend.scrollHeight + "px";
            } 
          });
        }



        var app = new Vue({
          el: '#app',
          data: {
            theNumber: 32
          }
        })

        // Instantiate the Bootstrap carousel
// $('.multi-item-carousel').carousel({
//   interval: false
// });

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
// $('.multi-item-carousel .item').each(function(){
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));
  
//   if (next.next().length>0) {
//     next.next().children(':first-child').clone().appendTo($(this));
//   } else {
//   	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//   }
// });

//     $(function() {
//   var current_progress = 0;
//   var interval = setInterval(function() {
//       current_progress += 10;
//       $("#dynamic")
//       .css("width", current_progress + "%")
//       .attr("aria-valuenow", current_progress)
//       .text(current_progress + "% Complete");
//       if (current_progress >= 100)
//           clearInterval(interval);
//   }, 1000);
// });
