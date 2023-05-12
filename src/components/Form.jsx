import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useNews from "../hooks/useNews";

const CATEGORIES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
];

export default function Form()
{

    const { category, handleChangeCategory } = useNews();

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select label="categoria" onChange={handleChangeCategory}
                    value={category}>

                    {CATEGORIES.map(category => (
                        <MenuItem key={category.value} value={category.value}>
                            {category.label}
                        </MenuItem>
                    ))}

                </Select>
            </FormControl>
        </form>
    )
}
