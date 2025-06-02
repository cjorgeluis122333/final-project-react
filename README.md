Este proyecto aplica una combinación de paradigmas de programación que permiten una estructura clara, mantenible y funcionalmente rica. A continuación, se detallan los principales paradigmas empleados:

🧱 1. Paradigma Imperativo
El enfoque imperativo está presente en la mayoría del código, donde se indica paso a paso cómo se deben realizar las operaciones. Por ejemplo, en funciones como createStudent, deleteStudent, o fetchAllStudent, se definen instrucciones específicas para realizar peticiones HTTP y manejar respuestas.

javascript
Copy
Edit
const res = await fetch("http://localhost:8081/api/student/", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(newStudent),
});
🔁 2. Paradigma Declarativo
Se hace uso del paradigma declarativo al trabajar con React y sus hooks, donde se define qué se quiere mostrar y no cómo mostrarlo. Ejemplo: el uso de useEffect, useState y JSX en componentes como UserListApp refleja este enfoque.

jsx
Copy
Edit
{students.map(student => (
<UserItem
key={student.id}
student={student}
onTryUpdate={onOpen}
onTryDelete={onOpenDeleteModal}
/>
))}
♻️ 3. Paradigma Funcional
El código reutiliza funciones puras (sin efectos colaterales) y utiliza conceptos del paradigma funcional como la inmutabilidad del estado (al usar useState y setState con el patrón de copia de objetos).

javascript
Copy
Edit
setState({
...state,
isLoading: true,
error: null
});
También se usan funciones como callbacks y promesas para componer comportamiento asincrónico sin bloquear la ejecución.

📦 4. Modularidad y Abstracción
El código está estructurado en módulos reutilizables (/hooks, /helper, /components) que fomentan la separación de responsabilidades y la reutilización del código. Cada módulo representa una funcionalidad aislada y clara, mejorando la mantenibilidad.

✅ Este enfoque combinado de paradigmas permite que la aplicación sea escalable, mantenible y fácil de probar, alineándose con buenas prácticas modernas en el desarrollo web con React.

