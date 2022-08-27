import {useRef} from 'react'

const AddClubForm = ({cities}) => {
    const form = useRef()
    const handleSubmit = async (e) => {
        const data = new FormData(form.current)
        await fetch('http://localhost:3100/clubs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })
    }

  return (
    <>
        <FormContainer>
            <FormWrapper>
                <Form ref={form} onSubmit={handleSubmit}>
                    <InputWrapper>
                        <Label>Name</Label>
                        <Input />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>City</Label>
                        <CityDropdown>
                            {cities.map(city => <option value={city.id}>{city.name}</option>)}
                        </CityDropdown>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Images</Label>
                        <Input type="file" />
                    </InputWrapper>
                </Form>
            </FormWrapper>
        </FormContainer>
    </>
  )
}

export default AddClubForm