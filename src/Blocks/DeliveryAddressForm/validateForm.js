import { object, string, number, boolean } from 'yup';

export const deliveryAddressSchema = object({
    direccion: string().required('Este campo es requerido'),
    altura: number().required('Este campo es requerido').min('1', 'La altura debe ser mayor a 1'),
    entrecalle1: string(),
    entrecalle2: string(),
    noTieneTimbre: boolean().required('Este campo es requerido'),
    piso: string(),
    depto: string(),
    unidad: string(),
    torre: string()
});
