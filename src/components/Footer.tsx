import { Button, Divider, HStack, IconButton, Link, Text, VStack } from "@chakra-ui/react"
import { FaExternalLinkAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export const Footer = () => {
  return (
    <>
      <VStack>
        <Divider borderColor={'gray.300'} marginTop={5} width={'100%'} />
        <HStack wrap={"wrap"} spacing={-3}>
          <Button fontFamily={'Inter, sans-serif'} fontSize={12} _active={{}} _hover={{ textColor: 'gray' }} bgColor={'transparent'} _focus={{}}>Trabalhe conosco</Button>
          <Button fontFamily={'Inter, sans-serif'} fontSize={12} _active={{}} _hover={{ textColor: 'gray' }} bgColor={'transparent'} _focus={{}}>Termos e condições</Button>
          <Button fontFamily={'Inter, sans-serif'} fontSize={12} _active={{}} _hover={{ textColor: 'gray' }} bgColor={'transparent'} _focus={{}}>Contato</Button>
        </HStack>
        <Text fontFamily={'Inter, sans-serif'} fontSize={12} _active={{}} bgColor={'transparent'} _focus={{}}>Copyright © Sis. de Informação 7º Alfa (2019-2022) - Todos os direitos reservados.</Text>
        <Text fontFamily={'Inter, sans-serif'} fontSize={12} _active={{}} bgColor={'transparent'} _focus={{}}>CNPJ nº 01.428.030/0001-66 / Rua Euridamas Avelino de Barros, nº 1400, Paracatu-MG.</Text>
        <HStack paddingY={3}>
          <Link href='https://www.instagram.com/uniatenasoficial/' isExternal>
            <IconButton className="iconfooter" fontSize={20} _active={{}} _hover={{ textColor: 'Instagram' }} _focus={{ boxShadow: "none" }} aria-label='Instagram' icon={<FaInstagram />} />
          </Link>
          <Link href='https://api.whatsapp.com/send?phone=553836723737&text=' isExternal>
            <IconButton className="iconfooter" fontSize={20} _active={{}} _hover={{ textColor: '#1eff00' }} _focus={{ boxShadow: "none" }} aria-label='WhatsApp' icon={<FaWhatsapp />} />
          </Link>
          <Link href='https://www.atenas.edu.br' isExternal>
            <IconButton className="iconfooter" fontSize={18} _active={{}} _hover={{ textColor: 'black' }} _focus={{ boxShadow: "none" }} aria-label='Twitter' icon={<FaExternalLinkAlt />} />
          </Link>
        </HStack>
      </VStack>
    </>
  )
}