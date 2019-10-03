let count = 0;
let counter = document.querySelector('.counter');
let lowerCount = document.querySelector('#lowerBtn');
let upperCount = document.querySelector('#uperBtn');

    upperCount.addEventListener('click', ucount);
    lowerCount.addEventListener('click', lcount);

    function ucount() {
        count++;
        counter.innerHTML = count;
        if (counter.innerHTML> '0'){
            counter.style.color = '#4caf4f85';
        }
        else if(counter.innerHTML === '0'){
            alert("its Zero");
            counter.style.color = 'white';
        }
    }
    
    function lcount(){
        count--;
        counter.innerHTML = count;
        if (counter.innerHTML<'0') {
            counter.style.color = "#db524885";
        }
        else if(counter.innerHTML === '0'){
            alert("its Zero");
            counter.style.color = 'white';
        }
    }