const fetchComments=()=>{
    fetch("http://localhost:4200/comments").then(
        res=>{console.log(res);}
    )
}
export default fetchComments;