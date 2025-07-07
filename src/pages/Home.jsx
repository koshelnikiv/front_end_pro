import { Typography, Box } from '@mui/material'

export default function Home() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Привіт! Я Іван
            </Typography>
            <Typography variant="body1" paragraph>
                🔧 З 2010 року працюю розробником ERP-системи GMS Office Tools (розробка БД (MS SQL), узгодження ТЗ, інтеграція з іншими системами, розробка звітів, технічна підтримка та консультування користувачів)
            </Typography>
            <Typography variant="body1" paragraph>
                🎯 Зараз проходжу курс Frontend Pro для власного розвитку та розширення знань та навичок.
            </Typography>
            <Typography variant="body1" paragraph>
                💼 Вивчаю такі технології: JavaScript, React, Redux, Redux-Saga, Thunk, Express, MUI, Bootstrap...
            </Typography>
        </Box>
    )
}
