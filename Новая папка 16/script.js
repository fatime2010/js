let python = document.querySelector('.python');
python.addEventListener('click', function(){
    const hiddenText = document.createElement('div');
    hiddenText.innerHTML=`
    <div>
    Python<br>
    Flask<br>
    Numpy<br>
    Done<br>
    Pandas<br>
    Statistics<br>
    API<br>
    MongoDB<br>
    </div>
    `;
    hiddenText.style.border= "1px solid  rgb(3, 173, 3)"
    hiddenText.style.height="300px";
    hiddenText.style.width="100%";
    python.appendChild(hiddenText);
    if (hiddenText.style.display === 'none' || !hiddenText.style.display) {
        hiddenText.style.display = 'block';
    } else {
        hiddenText.style.display = 'none';
    };
    
});
