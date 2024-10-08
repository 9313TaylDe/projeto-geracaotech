export default function Title(props) {
  return (
    <>
      {props.type === "primary" && (
        <h1
          className={`font-extrabold text-5xl text-center md:text-6xl sm:text-left text-[#1F1F1F]`}
        >
          {props.children}
        </h1>
      )}
      {props.type === "secondary" && (
        <h2 className={`font-bold text-5xl text-[#474747]`}>
          {props.children}
        </h2>
      )}
    </>
  );
}
