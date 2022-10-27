import { atom } from 'recoil'

export const textState = atom({
  key: 'textState',
  default: '',
})

export const sum = (novo: number): number => {
  return novo * 3.14
}

const resultado = sum(2)
console.warn(resultado)
