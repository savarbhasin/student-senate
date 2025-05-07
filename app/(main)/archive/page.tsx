import { readSpreadsheet } from "@/lib/sheets";
import  Archive from "@/components/Archive";
import { ArchiveType } from "@/components/Archive";

export default async function ArchivePage(){
  const data = await readSpreadsheet(
    "1GPgHnCcf7LbIKxfeOmXG05YLKerm4r4DsfmmnrRPHOI",
    "Sheet1!A:F"
  )

  data?.shift();
  const archiveData = data?.map((item: string[]) => ({
    year: Number(item[5]),
    category: item[2],  
    title: item[0],
    date: item[4],
    description: item[1],
    status: item[3],
  }))
  
  return <Archive data={archiveData ?? []} />
}