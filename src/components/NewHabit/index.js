import Input from "../Input";
import { useState } from "react";
import axios from 'axios';
import { ContainerNewHabit, Cancel, Days, Save, Options, Button } from './style';
import { useContext } from "react/cjs/react.development";
import TokenContext from "../../contexts/TokenContext";


function NewHabit({ setNewHabit, weekdays, listHabits, name, days, setName, setDays, selectedDays, setSelectedDays }) {
     const { token } = useContext(TokenContext);

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
               setName('');
               setDays([]);
               setSelectedDays([])
               setNewHabit(false)
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
                    <Save onClick={() => { handleAddHabit(); listHabits() }}>Salvar</Save>
               </Options>
          </ContainerNewHabit>
     )
}

export default NewHabit;