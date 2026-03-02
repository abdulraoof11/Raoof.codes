
function Circle({percent}:{percent:number}){
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent/100)*circumference;

  return (
    <svg width="120" height="120">
      <circle cx="60" cy="60" r={radius} stroke="#333" strokeWidth="8" fill="none"/>
      <circle cx="60" cy="60" r={radius} stroke="#FF7A00" strokeWidth="8" fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"/>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16">{percent}%</text>
    </svg>
  )
}

export default function Skills(){
  return (
    <section className="section">
      <div className="grid md:grid-cols-5 gap-10 text-center">
        {[100,100,85,60,70].map((p,i)=>(
          <div key={i}>
            <Circle percent={p}/>
            <p className="mt-4 text-[14px]">Skill {i+1}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
