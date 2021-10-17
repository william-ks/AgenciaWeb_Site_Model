import './style.css';

function animatePosition(){
    const boll = document.querySelector('.boll');
    const bollIcon = document.querySelector('.boll .icon');
    
    if(boll.classList.contains('animate')){
        boll.classList.remove('animate');
        bollIcon.classList.remove('iconAnimate');
        
        boll.classList.add('animateReverse');
        bollIcon.classList.add('iconReverse');
    }else if(boll.classList.contains('animateReverse')){
        boll.classList.remove('animateReverse');
        bollIcon.classList.remove('iconReverse');

        boll.classList.add('animate');
        bollIcon.classList.add('iconAnimate');      
    }else{
        boll.classList.add('animate');
        bollIcon.classList.add('iconAnimate'); 
    }


}

function setColor(){
    document.querySelector('#changeCl').classList.toggle('dark');
    document.body.classList.toggle('dark');
    document.querySelector('.Phrase').classList.toggle('dark');

    const line = document.querySelectorAll('.line');
    line.forEach(function(item){
        item.classList.toggle('dark');
    });
    
    const boxSingle = document.querySelectorAll('.box-single');

    boxSingle.forEach(function(item){
        item.classList.toggle('dark');
    })

    const teamBox = document.querySelectorAll('.singleTeam');
    teamBox.forEach(function(item){
        item.classList.toggle('dark');
    })

    document.querySelector('form').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');
}

const ChangeButton = () => {

    

    const changeMode = () => {
        animatePosition();
        setColor()
        
    }


    return(
        <button id="changeCl" className="change">
            <div className="boxChange" onClick={changeMode}>
                <div className="boll">
                    <div className="icon"></div>
                </div>
            </div>
        </button>
    )
}

export default ChangeButton;