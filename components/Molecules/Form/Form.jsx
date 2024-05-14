'use client'

import { Box, Button, Checkbox, Grid, Input, PasswordInput, Select, Table } from "@mantine/core";
import { IconSend } from "@tabler/icons-react";
import { useState } from "react";

export default function Form() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [agree, setAgree] = useState(true)
    const [allData, setAllData] = useState({
        username: "",
        email: "",
        password: "",
        gender: "",
        agree: true
    })

    const handleClick = () => {
        setAllData({
            username: username,
            email: email,
            password: password,
            gender: gender,
            agree: agree
        })
    }

    return (
        <Box>
            <Grid>
                <Grid.Col span={{base: 12, lg: 6, xs: 12}}>
                    <form>
                        <Grid>
                            <Grid.Col span={{base: 12, lg: 6, xs: 12}}>
                                <Input.Wrapper label="Username">
                                    <Input onChange={(e) => setUsername(e.target.value)} placeholder="Enter Your Username" />
                                </Input.Wrapper>
                            </Grid.Col>

                            <Grid.Col span={{base: 12, lg: 6, xs: 12}}>
                                <Input.Wrapper label="Email">
                                    <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email" />
                                </Input.Wrapper>
                            </Grid.Col>

                            <Grid.Col span={{base: 12, lg: 6, xs: 12}}>
                                <Input.Wrapper label="Password">
                                    <PasswordInput onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
                                </Input.Wrapper>
                            </Grid.Col>

                            <Grid.Col span={{base: 12, lg: 6, xs: 12}}>
                                <Input.Wrapper label="gender">
                                    <Select onChange={(e) => setGender(e)} data={['Male', 'Female']} />
                                </Input.Wrapper>
                            </Grid.Col>

                            <Grid.Col span={{base: 12, lg: 2, xs: 12}}>
                                <Input.Wrapper mt={30} label="Condition">
                                    <Checkbox onChange={(e) => setAgree(e.target.checked)} defaultChecked label="Are you agress???" />
                                </Input.Wrapper>
                            </Grid.Col>

                            <Grid.Col span={{base: 12, lg: 10, xs: 12}}>
                                <Button onClick={() => handleClick()} fullWidth leftSection={<IconSend />} mt={40}>
                                    Send
                                </Button>
                            </Grid.Col>
                        </Grid>
                        
                    </form>
                </Grid.Col>

                <Grid.Col span={{base: 12, lg: 6, xs: 12}}>
                     <Table mt={60} striped highlightOnHover withTableBorder withColumnBorders>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Username</Table.Th>
                                <Table.Th>Email</Table.Th>
                                <Table.Th>Password</Table.Th>
                                <Table.Th>Gender</Table.Th>
                                <Table.Th>Agree</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr>
                                <Table.Td>
                                    {allData.username}
                                </Table.Td>
                                <Table.Td>
                                    {allData.email}
                                </Table.Td>
                                <Table.Td>
                                    {allData.password}
                                </Table.Td>
                                <Table.Td>
                                    {allData.gender}
                                </Table.Td>
                                <Table.Td>
                                    {allData.agree ? 'User Agree' : 'User Not Agree'}
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                </Grid.Col>
            </Grid>

           
        </Box>
    )
}
