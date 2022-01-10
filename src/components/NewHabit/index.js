import Input from "../Input";
import { useState } from "react";
import axios from 'axios';
import { ContainerNewHabit, Cancel, Days, Save, Options, Button } from './style';


function NewHabit({ token, setNewHabit }) {
     const [name, setName] = useState('');
     const [days, setDays] = useState([]);
     const [selectedDays, setSelectedDays] = useState([]);
     const weekdays = ['D', 'S', "T", 'Q', 'Q', 'S', 'S'];

     function handleAddHabit() {
          const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
               name,
               days: selectedDays
          }, {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          });
          promise.then(response => {
               console.log(response.data);
               setDays(response.data.days);
          })
          promise.catch(error => {
               console.log(error.response)
               alert('Não foi possível salvar o hábito, tente novamente')
          });
     }

     function handleSelectedDay(day) {
          if (selectedDays.includes(day)) {
               setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
               return;
          }

          setSelectedDays([...selectedDays, day]);
          setDays(selectedDays);
     }
     console.log(selectedDays);

     return (
          <ContainerNewHabit>
               <Input type="text" value={name} placeholder="nome do hábito" onChange={(e) => setName(e.target.value)} />
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
                    <Cancel onClick={() => setNewHabit(false)}>Cancelar</Cancel>
                    <Save onClick={() => { handleAddHabit() }}>Salvar</Save>
               </Options>
          </ContainerNewHabit>
     )
}

export default NewHabit;