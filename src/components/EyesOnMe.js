// Code EyesOnMe Component Here
export default function EyesOnMe (){

function handleFocus(event){
   console.log('Good!')
}

function handleOnBlur(){
    console.log('Hey! Eyes on me!')
}
    return (
        <>
        <button onFocus={handleFocus} onBlur={handleOnBlur}>Eyes on me</button>
        </>
    )
}