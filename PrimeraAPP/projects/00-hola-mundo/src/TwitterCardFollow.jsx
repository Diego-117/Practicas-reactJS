//TODO: uso de Hook : utilidades que oportan funcionalidad a los componentes 
import { useState } from "react";
//----
export function AppTwitterCardFollow({children, format, imgNom, datos, initialIsFollowing}){ //FIXME: los props -->especia --->children
    //TODO: Hook 
    //[valor del nombre, forma de actualisarlo]
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    //--
    //TODO: renderisado condicional
    const text  = isFollowing? 'Siguiendo': 'Seguir';
    const buttonClassName  = isFollowing 
                ? 'tw-followCard-button is-following'
                : 'tw-followCard-button';
    //TODO: seguimos el hook
    const handelClick = ()=>{
        setIsFollowing(!isFollowing);
    }
    //---
    console.log(isFollowing)
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar' 
                src={`${imgNom}`}
                alt="Avatar" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{format(datos)}</span>
                </div>
            </header>
            
            <aside>
            <button className={buttonClassName} onClick={handelClick}>
            <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
            </aside>
        </article>
    )
}