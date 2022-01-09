import Input from "../Input";
import { ContainerNewHabit, Cancel, Days, Save, Options } from './style';


function NewHabit() {

     // function handleAddHabit() {
     //      const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
     //           { name, days }, {
     //           headers: {
     //                Authorization: `Bearer ${token}`
     //           }
     //      });

     //      promise.then(response => {
     //           console.log(response.data);
     //      })
     //      promise.catch(error => console.log(error.response));
     // }


     return (
          <ContainerNewHabit>
               <Input placeholder="nome do hábito" />
               <Days>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
               </Days>
               <Options>
                    <Cancel>Cancelar</Cancel>
                    <Save>Salvar</Save>
               </Options>
          </ContainerNewHabit>
     )
}

export default NewHabit;