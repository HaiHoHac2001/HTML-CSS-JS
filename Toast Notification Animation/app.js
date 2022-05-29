var btnsuccess = document.querySelector('.success')
var btnwarning = document.querySelector('.warning')
var btnerror = document.querySelector('.error')


btnsuccess.addEventListener('click', function(){
    createToast('success')
    
})
btnwarning.addEventListener('click', function(){
    createToast('warning')
    
})
btnerror.addEventListener('click', function(){
    createToast('error')
    
})


function createToast(status){
        // <div class="toast success">
        //     <i class='bx bxs-check-circle' ></i>
        //     <span>This is a success massage !</span>
        //     <p class="countdown"></p>
        // </div>
        // <div class="toast warning">
        //     <i class='bx bx-error-circle'></i>
        //     <span>This is a warning massage !</span>
        //     <p class="countdown"></p>
        // </div>
        // <div class="toast error">
        //     <i class='bx bx-error' ></i>
        //     <span>This is a error massage !</span>
        //     <p class="countdown"></p>
        // </div>


        let templateInner = `
                            <i class='bx bxs-check-circle' ></i>
                            <span>This is a success massage !</span>
                            <p class="countdown"></p>
        `
        switch (status){
            case 'sucess':
                templateInner = `
                            <i class='bx bxs-check-circle' ></i>
                            <span>This is a success massage !</span>
                            <p class="countdown"></p>
                `
                break
            case 'warning':
                templateInner = `
                            <i class='bx bx-error-circle'></i>
                            <span>This is a warning massage !</span>
                            <p class="countdown"></p>
                `
                break
            case 'error':
                templateInner = `
                            <i class='bx bx-error' ></i>
                            <span>This is a error massage !</span>
                            <p class="countdown"></p>
                `
                break
        }

        var toast = document.createElement('div');
        toast.classList.add('toast')
        toast.classList.add(status)
        toast.innerHTML = `${templateInner}`

        var toastlist = document.getElementById('toasts')
        toastlist.appendChild(toast)

        setTimeout(function(){
            toast.style.animation = 'slide_hide 2s ease'
        },3000)
        setTimeout(function(){
            toast.remove()
        },5000)
}