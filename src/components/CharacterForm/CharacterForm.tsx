import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CharacterFormProps{
    id?:string;
    data?:{}
}

interface CharacterState {
    name: string;
}

export const CharacterForm = (props:CharacterFormProps) => {
    const dispatch = useDispatch();
    let { characterData, getData } = useGetData();
    const store = useStore();
    const name = useSelector<CharacterState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if(props.id!){
            await server_calls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            await server_calls.create(store.getState())
            window.location.reload()
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Character Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="bio">Biography</label>
                    <Input {...register('biography')} name="biography" placeholder="Biography"/>
                </div>
                <div>
                    <label htmlFor="physical_appearance">Physical Appearance</label>
                    <Input {...register('physical_appearance')} name="physical_appearance" placeholder="Physical Appearance"/>
                </div>
                <div>
                    <label htmlFor="universe">Universe</label>
                    <Input {...register('universe')} name="universe" placeholder="Universe"/>
                </div>
                <Button color='secondary' type='submit'>Submit</Button>
            </form>
        </div>
    )
}