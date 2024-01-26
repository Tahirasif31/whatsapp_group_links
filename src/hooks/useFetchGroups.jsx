import { useEffect, useState } from "react";
import { supabase } from "./../supabase";

function useFetchGroups(category) {
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getGroups() {
      setIsLoading(true);
      const { data: groups, error } = await supabase
        .from("groups")
        .select("*")
        .eq("category", category);
      console.log(groups);
      if (error) alert("There is a problem while loading your groups");
      if (!error) setGroups(groups);
      setIsLoading(false);
    }
    getGroups();
  }, []);

  return [groups, isLoading];
}

export { useFetchGroups };
