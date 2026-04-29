import { useEffect } from 'react'

export default function useScrollReveal(ref, options = {}){
  const { threshold = 0.12 } = options

  useEffect(()=>{
    if(!ref?.current) return;
    const el = ref.current;
    el.setAttribute('data-revealed','false');
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.setAttribute('data-revealed','true');
          entry.target.classList.add('reveal');
          obs.unobserve(entry.target);
        }
      })
    }, { threshold })
    obs.observe(el);
    return ()=> obs.disconnect();
  },[ref, threshold])
}
