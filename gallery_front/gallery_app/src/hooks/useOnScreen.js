import { useState, useEffect } from 'react';

function useOnScreen(ref){
    const[isIntersecting, setIntersecting] = useState(false);
    //첫번째 인자값 = 현재 상태값 // 두번째 상태값 = 상태를 업데이트 해줄수있는 함수를 받을수 있다.


    //useEffect 첫번째 인자값 = componentdidmount 시작했을때 실행해줌, 두번째 인자값 [ 이 값이 변할때마다 실행시켜준다. ]
    useEffect(()=>{
        //오픈될때
        const observer = new IntersectionObserver(
            ([entry])=>{
                //새 값으로 상태 업데이트를 해줌
                setIntersecting(entry?.isIntersecting ?? false);

            },{
                threshold: 0.9
            }

        )
        const currentRef = ref.current; //ref 전달
        if(currentRef){
            observer.observe(currentRef);
        }

        //unmount될때  =  닫힐때
        return () =>{
            if(currentRef){
                observer.unobserve(currentRef);
            }
        }
    },[ref])

    return isIntersecting;
}

export default useOnScreen;