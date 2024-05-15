import supabase from "./supabase";

export async function getCabins() {
  try {
    const { data: cabinsData, error } = await supabase
      .from("cabins")
      .select("*");

    if (error) {
      console.error("this is console.error:", error);
      throw new Error("Cabins could not be loaded");
    }

    console.log("Cabins request succeeded");
    return cabinsData;
  } catch (error) {
    console.log("this is the error message:", error.message);
    return error.message;
  }
}

export async function createCabin(newCabin) {
  const { data, error } = await supabase.from("cabins").insert([newCabin]);

  if (error) {
    console.error("this is console.error:", error);
    throw new Error("Cabin could not be created");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error("this is console.error:", error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
