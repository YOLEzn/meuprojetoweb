from pytubefix import YouTube
from pytubefix.cli import on_progress

# Cole a URL do vídeo aqui
video_url = "https://youtu.be/ZheSWhS9lQg?si=y80U6bYqkl-uhBOy"

try:
    # Cria o objeto do vídeo e adiciona uma barra de progresso no terminal
    yt = YouTube(video_url, on_progress_callback=on_progress)

    print(f"Baixando: {yt.title}")

    # Filtra apenas por vídeo e áudio juntos (progressive) na maior resolução
    ys = yt.streams.get_highest_resolution()

    # Faz o download na pasta onde o script está salvo
    ys.download()
    
    print("\nDownload concluído com sucesso!")

except Exception as e:
    print(f"Ocorreu um erro: {e}")