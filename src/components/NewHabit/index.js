import Input from "../Input";
import { useContext, useState } from "react";
import axios from 'axios';
import { ContainerNewHabit, Cancel, Days, Save, Options, Button } from './style';
import HabitsPage from "../HabitsPage";


function NewHabit({ token }) {
     const [name, setName] = useState('');
     const [days, setDays] = useState([]);
     const [selectedDays, setSelectedDays] = useState([]);
     const weekdays = ['D', 'S', "T", 'Q', 'Q', 'S', 'S'];
     // const [isSelected, setIsSelected] = useState([]);

     function handleAddHabit() {
          const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
               { name, days }, {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          });
          promise.then(response => {
               console.log(response.data);
               setDays(response.data.days);
          })
          promise.catch(error => console.log(error.response));
     }

     function handleSelectedDay(day) {
          selectedDays.filter((item) => {
               if (item !== day) {
                    return true
               }
          })

          console.log('estou sendo selecionado')
          setSelectedDays([...selectedDays, day]);
     }
     console.log(selectedDays);

     return (
          <ContainerNewHabit>
               <Input placeholder="nome do hábito" />
               <Days>
                    {
                         weekdays.map((day, index) => (
                              <Button
                                   isSelected={selectedDays.includes(index)}
                                   onClick={() => handleSelectedDay(index)}
                              >{day}</Button>
                         ))
                    }
               </Days>
               <Options>
                    <Cancel>Cancelar</Cancel>
                    <Save onClick={() => { handleAddHabit() }}>Salvar</Save>
               </Options>
          </ContainerNewHabit>
     )
}

export default NewHabit;