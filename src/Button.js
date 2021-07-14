
function Button(props) {

    return (
        <div className="buttons">
            <a href="#"><div onClick={props.moree} className="b_one"> Увеличить</div></a>
            <a href="#"><div onClick={props.less} className="b_two">Уменьшить</div></a>
            <a href="#"><div onClick={props.trash} className="b_three">Сбросить</div></a>
        </div>
    );



}

export default Button;