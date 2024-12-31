import { useRef, useEffect, useCallback } from "react";
import style from "./RenderTip.module.scss";

const RenderTip = () => {
  const refCount = useRef(1);
  const refDom = useRef(null);

  useEffect(() => {
    refCount.current += 1;
    refDom.current.classList.remove(style.styleAnimate);
    refDom.current.classList.add(style.styleAnimate);
  });

  const atAnimationEnd = useCallback(() => {
    refDom.current.classList.remove(style.styleAnimate);
  }, []);

  return(
    <strong className={style.root} ref={refDom} onAnimationEnd={atAnimationEnd}>
      {refCount.current}
    </strong>
  );
};
export default RenderTip;