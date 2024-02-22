const Test = ({text, isChecked} : {text : string, isChecked : boolean}) => {
    let returnText : any
    if(isChecked){
        returnText = (
            <div> {text} is Checked</div>
        )
    } else {
        returnText = (
            <div> {text} is not Checked</div>
            )
        }
    console.log(typeof(returnText))
  return (
    returnText
  )
}

export default Test