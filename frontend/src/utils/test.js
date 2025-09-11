import { fetchData,
        createMember,
        updateMember,
        deleteMember
 } from "./index.js";

const data = await fetchData();
console.log(data);

const newMember = await createMember("John Doe", "Software Engineer", false);
console.log(newMember);

const updatedMember = await updateMember(7, "Jane Doe", "Senior Software Engineer", true);
console.log(updatedMember);

const deletedMember = await deleteMember(7);
console.log(deletedMember);