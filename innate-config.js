const innate={
  server:"https://server.marcosruben.com"
};

var backups=["https://innate-server.vercel.app/innate/https://server.marcosruben.com"];
async function updateServer(){
  try{
    innate.server=new URL("/",innate.server);
  } catch(e){
    for (var i=0;i<backups.length;i++){
      var found=true;
      try {
        innate.server=new URL("/",backups[i]);
      } catch (e) {
        found=false;
      }
      if (found){
        break;
      }
    }
  }
}
