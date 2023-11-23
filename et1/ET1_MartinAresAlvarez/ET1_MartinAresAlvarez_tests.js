<script type="text/javascript">

def_test_MartinAresAlvarez =
    Array(

        //id_programa
        Array('id_programa', 1, 'tamaño < 1' , false, 'El id del programa no puede tener menos de 1
            dígitos'),
        Array('id_programa', 2, 'tamaño > 6', false, 'El id del programa no puede tener más de 6
            dígitos'),
        Array('id_programa', 3, 'no númerico', false, 'Id del programa
            contiene caracteres no permitidos (solo numéricos)'),
        Array('id_programa', 4, 'dígitos entre el 1 y el 6', true, 'Exito'),

        //nombre_programa
        Array('nombre_programa', 5, 'tamaño < 6' , false, 'El nombre del programa no puede tener menos de 6
            caracteres'),
        Array('nombre_programa', 6, 'tamaño > 60', false, 'El nombre del programa no puede tener más de 60
            caracteres'),
        Array('nombre_programa', 7, 'caracter distinto a ñ, acentos, espacio o alfabético', false, 'Nombre del programa
            contiene caracteres no permitidos (solo alfabéticos, acentos, ñ y espacios)'),
        Array('nombre_programa', 8, 'presencia dígitos > 0', false, 'Nombre del programa
            contiene dígitos, no permitidos (solo alfabéticos, acentos, ñ y espacios)'),
        Array('nombre_programa', 9, 'caracteres alfabéticos, ñ, acentos, y espacios', true, 'Exito'),

        //acronimo_programa
        Array('acronimo_programa', 10, 'tamaño < 3' , false, 'El acrónimo del programa no puede tener menos de 3
            caracteres'),
        Array('acronimo_programa', 11, 'tamaño > 20', false, 'El acrónimo del programa no puede tener más de 20
            caracteres'),
        Array('acronimo_programa', 12, 'caracteres con ñ, acentos o espacio', false, 'Acrónimo del programa
            contiene caracteres no permitidos (solo alfabéticos, ñ no incluida)'),
        Array('acronimo_programa', 13, 'presencia dígitos > 0', false, 'Acrónimo del programa
            contiene dígitos, no permitidos (solo alfabéticos, ñ no incluida)'),
        Array('acronimo_programa', 14, 'caracteres alfabéticos entre 3 y 20', true, 'Exito'),

        //nombre_original_programa
        Array('nombre_original_programa', 15, 'tamaño < 6' , false, 'El nombre original del programa no puede tener menos de 6
            caracteres'),
        Array('nombre_original_programa', 16, 'tamaño > 60', false, 'El nombre original del programa no puede tener más de 60
            caracteres'),
        Array('nombre_original_programa', 17, 'caracter distinto a ñ, acentos, espacio o alfabético', false, 'Nombre original del programa
            contiene caracteres no permitidos (solo alfabéticos, acentos, ñ y espacios)'),
        Array('nombre_original_programa', 18, 'presencia dígitos > 0', false, 'Nombre original del programa
            contiene dígitos, no permitidos (solo alfabéticos, acentos, ñ y espacios)'),
        Array('nombre_original_programa', 19, 'caracteres alfabéticos, ñ, acentos, y espacios', true, 'Exito'),

        //autor_programa
        Array('autor_programa', 20, 'tamaño < 6' , false, 'El autor del programa no puede tener menos de 6
            caracteres'),
        Array('autor_programa', 21, 'tamaño > 50', false, 'El autor del programa no puede tener más de 50
            caracteres'),
        Array('autor_programa', 22, 'caracter distinto a ñ, acentos, espacio o alfabético', false, 'Autor del programa
            contiene caracteres no permitidos (solo alfabéticos, acentos, ñ y espacios)'),
        Array('autor_programa', 23, 'presencia dígitos > 0', false, 'Autor del programa
            contiene dígitos, no permitidos (solo alfabéticos, acentos, ñ y espacios)'),
        Array('autor_programa', 24, 'caracteres alfabéticos, ñ, acentos, y espacios', true, 'Exito'),

        //autor_orginal_programa
        Array('autor_original_programa', 25, 'tamaño < 6' , false, 'El autor original del programa no puede tener menos de 6
            caracteres'),
        Array('autor_original_programa', 26, 'tamaño > 50', false, 'El autor original del programa no puede tener más de 50
            caracteres'),
        Array('autor_original_programa', 27, 'caracter distinto a ñ, acentos, espacio o alfabético', false, 'Autor original del programa
            contiene caracteres no permitidos (solo alfabéticos, acentos, ñ y espacios)'),
        Array('autor_original_programa', 28, 'presencia dígitos > 0', false, 'Autor original del programa
            contiene dígitos, no permitidos (solo alfabéticos, acentos, ñ y espacios)'),
        Array('autor_original_programa', 29, 'caracteres alfabéticos, ñ, acentos, y espacios', true, 'Exito'),

        //ano_programa
        Array('ano_programa', 30, 'tamaño < 4' , false, 'El año del programa no puede tener menos de 4
            dígitos'),
        Array('ano_programa', 31, 'tamaño > 4', false, 'El año del programa no puede tener más de 4
            dígitos'),
        Array('ano_programa', 32, 'no numericos o un solo cero', false, 'Año del programa
            contiene caracteres no permitidos, solo dígitos'),
        Array('ano_programa', 33, 'año introducido > año actual', false, 'Año del programa
            mayor al actual'),
        Array('ano_programa', 34, 'tamaño = 4 y año <= año actual', true, 'Exito'),

        //ano_original_programa
        Array('ano_original_programa', 35, 'tamaño < 4' , false, 'El año original del programa no puede tener menos de 4
            dígitos'),
        Array('ano_original_programa', 36, 'tamaño > 4', false, 'El año original del programa no puede tener más de 4
            dígitos'),
        Array('ano_original_programa', 37, 'no numericos o un solo cero', false, 'Año original del programa
            contiene caracteres no permitidos, solo dígitos'),
        Array('ano_original_programa', 38, 'año introducido > año actual', false, 'Año original del programa
            mayor al actual'),
        Array('ano_original_programa', 39, 'tamaño = 4 y año <= año actual', true, 'Exito'),

        //requisitos_programa
        Array('requisitos_programa', 40, 'tamaño < 6' , false, 'Los requisitos del programa no pueden tener menos de 6
            caracteres'),
        Array('requisitos_programa', 41, 'tamaño > 300', false, 'Los requisitos del programa no pueden tener más de 300
            caracteres'),
        Array('requisitos_programa', 42, 'caracter distinto a ñ, acentos, espacio, alfabético o signos de puntuación', false, 'Requisitos del programa
            contiene caracteres no permitidos (solo alfabéticos, acentos, ñ, espacios y signos de puntuación)'),
        Array('requisitos_programa', 43, 'presencia dígitos > 0', false, 'Requisitos del programa
            contiene dígitos, no permitidos (solo alfabéticos, acentos, ñ, espacios y signos de puntuación)'),
        Array('requisitos_programa', 44, 'caracteres alfabéticos, ñ, acentos, espacios y signos de puntuación', true, 'Exito'),

        //poblacion_desde_programa
        Array('poblacion_desde_programa', 45, 'tamaño < 1' , false, 'La población desde programa no puede tener menos de 1
            dígito'),
        Array('poblacion_desde_programa', 46, 'tamaño > 2', false, 'La población desde programa no puede tener más de 2
            dígitos'),
        Array('poblacion_desde_programa', 47, 'no numericos', false, 'Población desde programa
            contiene caracteres no permitidos, solo dígitos'),
        Array('poblacion_desde_programa', 48, 'tamaño = vacio', false, 'Población desde programa
            no puede ser vacío'),
        Array('poblacion_desde_programa', 49, 'tamaño entre 1 y 2 dígitos', true, 'Exito'),

        //poblacion_hasta_programa
        Array('poblacion_hasta_programa', 50, 'tamaño < 1' , false, 'La población hasta programa no puede tener menos de 1
            dígito'),
        Array('poblacion_hasta_programa', 51, 'tamaño > 2', false, 'La población hasta programa no puede tener más de 2
            dígitos'),
        Array('poblacion_hasta_programa', 52, 'no numericos', false, 'Población hasta programa
            contiene caracteres no permitidos, solo dígitos'),
        Array('poblacion_hasta_programa', 53, 'tamaño = vacio', false, 'Población hasta programa
            no puede ser vacío'),
        Array('poblacion_hasta_programa', 54, 'tamaño entre 1 y 2 dígitos', true, 'Exito'),

        //unidad_poblacion
        Array('unidad_poblacion', 55, 'valor != MESES o valor != AÑOS' , false, 'La unidad población no puede ser
            distinta a MESES o AÑOS'),
        Array('unidad_poblacion', 56, 'valor = meses o valor = años', false, 'La unidad población tiene que
            estar en mayúsculas'),
        Array('unidad_poblacion', 57, 'presencia de algún caracter en minúscula', false, 'Unidad Población no puede
            contener minúsculas, solo palabras MESES o AÑOS (mayúsculas)'),
        Array('unidad_poblacion', 58, 'tamaño = vacio', false, 'Unidad población
            no puede ser vacío'),
        Array('unidad_poblacion', 59, 'valor = MESES o valor = AÑOS', true, 'Exito'),

        //tipo_programa
        Array('tipo_programa', 60, 'valor != EVALUACIÓN o valor != INTERVENCIÓN o valor != EVALUACIÓN E INTERVENCIÓN' , false, 'El tipo de programa no puede ser
            distinto a EVALUACIÓN, INTERVENCIÓN O EVALUACIÓN E INTERVENCIÓN'),
        Array('tipo_programa', 61, 'ausencia de algún acento' , false, 'El tipo de programa tiene que
            contener los acentos correspondientes'),
        Array('tipo_programa', 62, 'valor = evaluación o valor = intervención o valor = evaluación e intervención', false, 'El tipo de programa tiene que
            estar en mayúsculas'),
        Array('tipo_programa', 63, 'presencia de algún caracter en minúscula', false, 'Tipo de programa no puede
            contener minúsculas, solo palabras EVALUACIÓN, INTERVENCIÓN O EVALUACIÓN E INTERVENCIÓN (mayúsculas)'),
        Array('tipo_programa', 64, 'tamaño = vacio', false, 'Tipo de programa
            no puede ser vacío'),
        Array('tipo_programa', 65, 'valor = EVALUACIÓN o valor = INTERVENCIÓN o valor = EVALUACIÓN E INTERVENCIÓN', true, 'Exito'),

        //tiempo_aplicacion_programa
        Array('tiempo_aplicacion_programa', 66, 'tamaño < 1' , false, 'El tienpo de aplicación de programa no puede tener menos de 1
            dígito'),
        Array('tiempo_aplicacion_programa', 67, 'tamaño > 4', false, 'El tiempo de aplicación de programa no puede tener más de 4
            dígitos'),
        Array('tiempo_aplicacion_programa', 68, 'no numericos', false, 'Tiempo aplicación de programa
            contiene caracteres no permitidos, solo dígitos'),
        Array('tiempo_aplicacion_programa', 69, 'valor = vacio', false, 'Tiempo aplicación de programa
            no puede ser vacío'),
        Array('tiempo_aplicacion_programa', 70, 'tamaño entre 1 y 4 dígitos', true, 'Exito'),

        //descrip_interp_programa        
        Array('descrip_interp_programa', 71, 'tamaño < 100 ' , false, 'La descrip_interp del programa no pueden tener menos de 100
            caracteres'),
        Array('descrip_interp_programa', 72, 'tamaño > 5000', false, 'La descrip_interp del programa no pueden tener más de 5000
            caracteres'),
        Array('descrip_interp_programa', 73, 'caracter distinto a ñ, acentos, espacio, alfabético, signos de puntuación o retornos de carro', false, 'Requisitos de
            descrip_interp del programa contiene caracteres no permitidos (solo alfabéticos, acentos, ñ, espacios, signos de puntuación y retornos de carro)'),
        Array('descrip_interp_programa', 74, 'presencia dígitos > 0', false, 'Requisitos de la descrip_interp programa
            contiene dígitos, no permitidos (solo alfabéticos, acentos, ñ, espacios, signos de puntuación y retornos de carro)'),
        Array('descrip_interp_programa', 75, 'caracteres alfabéticos, ñ, acentos, espacios, signos de puntuación y retornos de carro', true, 'Exito'),

        //fichero_programa
        Array('fichero_programa', 76, 'tamaño < 7' , false, 'El fichero del programa no puede tener menos de 7
            caracteres'),
        Array('fichero_programa', 77, 'tamaño > 60', false, 'El fichero del programa no puede tener más de 60
            caracteres'),
        Array('fichero_programa', 78, 'caracteres con ñ, acentos o espacio', false, 'Fichero del programa
            contiene caracteres no permitidos (solo alfabéticos, ñ no incluida)'),
        Array('fichero_programa', 79, 'presencia dígitos > 0', false, 'Fichero del programa
            contiene dígitos, no permitidos (solo alfabéticos, ñ no incluida)'),
        Array('fichero_programa', 80, 'caracteres alfabéticos entre 7 y 60', true, 'Exito'),

        //enlace_programa
        Array('enlace_programa', 81, 'tamaño < 10' , false, 'El enlace del programa no puede tener menos de 10
            caracteres'),
        Array('enlace_programa', 82, 'tamaño > 100', false, 'El enlace del programa no puede tener más de 100
            caracteres'),
        Array('enlace_programa', 83, 'caracteres con ñ, acentos o espacio', false, 'Enlace del programa
            contiene caracteres no permitidos (solo alfabéticos, ñ no incluida)'),
        Array('enlace_programa', 84, 'presencia dígitos > 0', false, 'Enlace del programa
            contiene dígitos, no permitidos (solo alfabéticos, ñ no incluida)'),
        Array('enlace_programa', 85, 'caracteres alfabéticos entre 10 y 100 con formato y: y / y', true, 'Exito'),

        //formato_programa
        Array('formato_programa', 86, 'valor != PAPEL o valor != ELECTRÓNICO o valor != PAPEL Y ELECTRÓNICO' , false, 'El formato de programa no puede ser
            distinto a PAPEL, ELECTRÓNICO o PAPEL Y ELECTRÓNICO'),
        Array('formato_programa', 87, 'ausencia de algún acento' , false, 'El formato de programa tiene que
            contener los acentos correspondientes'),
        Array('formato_programa', 88, 'valor = papel o valor = electrónico o valor = papel y electrónico', false, 'El formato de programa tiene que
            estar en mayúsculas'),
        Array('formato_programa', 89, 'presencia de algún caracter en minúscula', false, 'Formato de programa no puede
            contener minúsculas, solo palabras PAPEL, ELECTRÓNICO O PAPEL Y ELECTRONICO (mayúsculas)'),
        Array('formato_programa', 90, 'tamaño = vacio', false, 'Formato de programa
            no puede ser vacío'),
        Array('formato_programa', 91, 'valor = PAPEL o valor = ELECTRÓNICO o valor = PAPEL Y ELECTRÓNICO', true, 'Exito'),

        //modo_correccion_programa
        Array('modo_correccion_programa', 92, 'valor != PAPEL o valor != ELECTRÓNICO o valor != PAPEL Y ELECTRÓNICO' , false, 'El modo corrección de programa no puede ser
            distinto a PAPEL, ELECTRÓNICO o PAPEL Y ELECTRÓNICO'),
        Array('modo_correccion_programa', 93, 'ausencia de algún acento' , false, 'El modo correccion de programa tiene que
            contener los acentos correspondientes'),
        Array('modo_correccion_programa', 94, 'valor = papel o valor = electrónico o valor = papel y electrónico', false, 'El modo corrección de programa tiene que
            estar en mayúsculas'),
        Array('modo_correccion_programa', 95, 'presencia de algún caracter en minúscula', false, 'Modo corrección de programa no puede
            contener minúsculas, solo palabras PAPEL, ELECTRÓNICO O PAPEL Y ELECTRONICO (mayúsculas)'),
        Array('modo_correccion_programa', 96, 'tamaño = vacio', false, 'Modo correccion de programa
            no puede ser vacío'),
        Array('modo_correccion_programa', 97, 'valor = PAPEL o valor = ELECTRÓNICO o valor = PAPEL Y ELECTRÓNICO', true, 'Exito'),

        //modo_aplicacion_programa
        Array('modo_aplicacion_programa', 98, 'valor != INDIVIDUAL o valor != COLECTIVO o valor != INDIVIDUAL Y COLECTIVO' , false, 'El modo aplicación de programa no puede ser
            distinto a INDIVIDUAL, COLECTIVO o INDIVIDUAL Y COLECTIVO'),
        Array('modo_aplicacion_programa', 99, 'presencia de algún acento' , false, 'El modo aplicación de programa NO tiene que
            contener acentos'),
        Array('modo_aplicacion_programa', 100, 'valor = individual o valor = colectivo o valor = individual y colectivo', false, 'El modo aplicación de programa tiene que
            estar en mayúsculas'),
        Array('modo_aplicacion_programa', 101, 'presencia de algún caracter en minúscula', false, 'Modo aplicación de programa no puede
            contener minúsculas, solo palabras INDIVIDUAL, COLECTIVO o INDIVIDUAL Y COLECTIVO (mayúsculas)'),
        Array('modo_aplicacion_programa', 102, 'tamaño = vacio', false, 'Modo aplicación de programa
            no puede ser vacío'),
        Array('modo_aplicacion_programa', 103, 'valor = INDIVIDUAL o valor = COLECTIVO o valor = INDIVIDUAL Y COLECTIVO', true, 'Exito'),

        //imagen_programa
        Array('imagen_programa', 104, 'tamaño < 7' , false, 'La imagen del programa no puede tener menos de 7
            caracteres'),
        Array('imagen_programa', 105, 'tamaño > 60', false, 'La imagen del programa no puede tener más de 60
            caracteres'),
        Array('imagen_programa', 106, 'caracteres con ñ, acentos o espacio', false, 'Imagen del programa
            contiene caracteres no permitidos (solo alfabéticos, ñ no incluida)'),
        Array('imagen_programa', 107, 'presencia dígitos > 0', false, 'Imagen del programa
            contiene dígitos, no permitidos (solo alfabéticos, ñ no incluida)'),
        Array('imagen_programa', 108, 'caracteres alfabéticos entre 7 y 60', true, 'Exito')
    );

</script>
