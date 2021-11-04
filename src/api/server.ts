const token = '062264c99e7e7f1317f9b471fa29b123e374743a440a734c';


export const server_calls = {
    get: async () => {
        const response = await fetch('https://week5project.herokuapp.com/api/chars',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch your data from the server...')
        }
        return response.json()
    },
    create: async (data: any = {}) =>{
        const response = await fetch('https://week5project.herokuapp.com/api/chars',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create your character...')
        }
        return response.json()
    },
    update: async (id: string, data: any = {}) => {
        const response = await fetch (`https://week5project.herokuapp.com/api/chars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to update your character...')
        }
        return await response.json()
    },
    delete: async(id:string) => {
        const response = await fetch(`https://week5project.herokuapp.com/api/chars${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Could not delete your character...')
        }
    }
}