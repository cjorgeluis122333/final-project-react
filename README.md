Informe: Aplicación estudiantil en JavaScript y React – Paradigmas de Programación
La aplicación presentada para la gestión de estudiantes hace uso combinado de tres paradigmas de programación: imperativo, funcional y asincrónico. Esta integración potencia la legibilidad, mantenimiento y eficiencia del sistema.

Paradigma Imperativo
El paradigma imperativo se refleja principalmente en la lógica de control del flujo y manejo de estados dentro de los hooks personalizados y componentes. Por ejemplo, en hookDeleteStudent, se utilizan estructuras como try/catch, if/else, y llamadas secuenciales para indicar paso a paso qué debe hacerse (abrir modal, hacer petición, actualizar estado). También vemos un enfoque imperativo cuando se manipulan directamente objetos de estado con setState para establecer condiciones o respuestas a eventos.

js
Copy
Edit
if (state.first_name.length < 3) {
setState({...state, error: "The student firstname should has more than 3 character"});
}
Paradigma Funcional
La programación funcional se encuentra en el uso de funciones puras, inmutabilidad y operaciones sobre colecciones. El uso de map para renderizar elementos (students.map(...)) ejemplifica cómo se evita la mutación directa y se construyen nuevos elementos a partir de funciones puras. También, el uso de funciones como useCallback, useEffect, y la separación de lógica en funciones reutilizables (onValueChange, handleCreate, etc.) son prácticas funcionales.

js
Copy
Edit
{students.map(student => (
<UserItem key={student.id} student={student} onTryUpdate={onOpen} onTryDelete={onOpenDeleteModal} />
))}
Paradigma Asincrónico
Este paradigma es fundamental para la interacción con el backend. Todas las funciones que realizan llamadas a la API (fetchAllStudent, deleteStudent, createStudent, updateStudent) están definidas como funciones async, haciendo uso de await para gestionar la ejecución no bloqueante. Esto permite una experiencia fluida sin congelar la interfaz de usuario mientras se esperan respuestas del servidor.

js
Copy
Edit
const response = await fetch("http://localhost:8081/api/student/all");
Los hooks personalizados también integran asincronía al encapsular funciones como loadStudents o onUpdate, permitiendo que la lógica asincrónica sea reutilizable y limpia.

Conclusión
El diseño de esta aplicación demuestra un enfoque moderno e integral de desarrollo en JavaScript, utilizando React. El paradigma imperativo estructura la lógica del control de flujo, el funcional favorece la composición y claridad de componentes y lógica, mientras que el asincrónico gestiona eficientemente las interacciones con la red. Esta combinación de paradigmas hace que la aplicación sea robusta, clara y extensible.

