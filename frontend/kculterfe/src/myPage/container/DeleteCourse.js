import axios from 'axios';

export async function DeleteCourse([props]) {
    let result;

    //await 한 값을 보내준다.
    return await axios.delete('/course',{
        headers: {
            CourseHash: props.courseHash,
        }
    })
    .then(function(res){
        result = res.data;
        return result;
    })
    .catch(function(error){
        console.log(error);
        return 401;
    });
}