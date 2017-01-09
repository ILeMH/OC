package projet1;

import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class sdz1 {
  public static void main(String[] args) {

	  Path path = Paths.get("test.txt");
	  System.out.println("Chemin absolu du fichier : " + path.toAbsolutePath());
	  System.out.println("Est-ce qu'il existe ? " + Files.exists(path));
	  System.out.println("Nom du fichier : " + path.getFileName());
	  System.out.println("Est-ce un répertoire ? " + Files.isDirectory(path));
	  
	Iterable<Path> roots = FileSystems.getDefault().getRootDirectories();

	for(Path chemin : roots){
	  System.out.println(chemin);

	  try(DirectoryStream<Path> listing = Files.newDirectoryStream(chemin)){
		
	    int i = 0;
	    for(Path nom : listing){
	      System.out.print("\t\t" + ((Files.isDirectory(nom)) ? nom+"/" : nom));
	      i++;
	      if(i%4 == 0)System.out.println("\n");
	    }
			
	  } catch (IOException e) {
	    e.printStackTrace();
	  }
	}
	  
  }
}